package controllers;

import java.io.IOException;
import java.io.PrintWriter;

import javax.servlet.ServletException;
import javax.servlet.annotation.WebServlet;
import javax.servlet.http.HttpServlet;
import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;

import com.google.gson.Gson;
import com.password4j.Hash;
import com.password4j.Password;

import database.ManagePlayer;
import models.GeneralJsonResponse;
import models.Player;
import models.PlayerStatsJsonResponse;

/**
 * Servlet implementation class PlayerController
 */
@WebServlet("/PlayerController")
public class PlayerController extends HttpServlet {
	private static final long serialVersionUID = 1L;

	protected void doGet(HttpServletRequest request, HttpServletResponse response) throws ServletException, IOException {
		response.sendRedirect("index.html");
	}

	// Handles player login / register
	protected void doPost(HttpServletRequest request, HttpServletResponse response) throws ServletException, IOException {
		PrintWriter out = response.getWriter();
		ManagePlayer mp = new ManagePlayer();
		Player currentPlayer = getPlayerFromRequest(
				request.getReader().lines().reduce("", (accumulator, actual) -> accumulator + actual));
		// Checks if the player hit the register button (else if he hit login)
		if (currentPlayer.getType().equals("register")) {
			currentPlayer.setPassword(getPasswordHash(currentPlayer.getPassword()));
			// Tries to add player to database, if a username match is found, do not add.
			if (mp.addPlayer(currentPlayer)) {
				out.write("Registered successfully.");
			} else {
				out.write("Username already taken.");
			}
		} else {
			response.setContentType("application/json");
			currentPlayer.setId(mp.getPlayerId(currentPlayer.getName()));
			String jsonOutput;
			String userPasswordCheck = mp.checkPassword(currentPlayer);
			if (currentPlayer.getType().equals("login")) {
				if (userPasswordCheck.equals("success")) {
					jsonOutput = getPlayerStatsJsonResponse(currentPlayer);
				} else {
					// Will return relevant error message ie incorrect password
					jsonOutput = getGeneralJsonResponse(userPasswordCheck);
				}
			} else if (currentPlayer.getType().equals("checkpassword")) {
				jsonOutput = getGeneralJsonResponse(userPasswordCheck);
			} else {
				jsonOutput = getPlayerStatsJsonResponse(currentPlayer);
			}
			out.write(jsonOutput);
		}
	}

	// Saves players statistics
	protected void doPut(HttpServletRequest request, HttpServletResponse response) throws ServletException, IOException {
		PrintWriter out = response.getWriter();
		ManagePlayer mp = new ManagePlayer();
		Gson gson = new Gson();
		String userDetails = request.getReader().lines().reduce("", (accumulator, actual) -> accumulator + actual);
		PlayerStatsJsonResponse playerStatsJson = gson.fromJson(userDetails, PlayerStatsJsonResponse.class);
		Player currentPlayer = playerStatsJson.getP();
		if (currentPlayer.getType().equals("changepassword")) {
			currentPlayer.setPassword(getPasswordHash(currentPlayer.getPassword()));
			out.write(mp.updatePassword(currentPlayer));
		} else {
			mp.updateAllPlayerStats(playerStatsJson.getR(), playerStatsJson.getPs(), playerStatsJson.getPsk());
			out.write("Player stats saved.");
		}
	}

	protected void doDelete(HttpServletRequest request, HttpServletResponse response)
			throws ServletException, IOException {
		PrintWriter out = response.getWriter();
		ManagePlayer mp = new ManagePlayer();
		Player currentPlayer = getPlayerFromRequest(
				request.getReader().lines().reduce("", (accumulator, actual) -> accumulator + actual));
		out.write(mp.deletePlayer(currentPlayer));
	}

	protected String getPasswordHash(String password) {
		Hash hash = Password.hash(password).withArgon2();
		return hash.getResult();
	}

	protected String getPlayerStatsJsonResponse(Player currentPlayer) {
		ManagePlayer mp = new ManagePlayer();
		Gson gson = new Gson();
		int playerId = currentPlayer.getId();
		currentPlayer.setPassword("");
		PlayerStatsJsonResponse playerStats = new PlayerStatsJsonResponse(currentPlayer, mp.getPlayerStats(playerId),
				mp.getPlayerResources(playerId), mp.getPlayerSkills(playerId));
		return gson.toJson(playerStats);
	}

	protected String getGeneralJsonResponse(String response) {
		Gson gson = new Gson();
		GeneralJsonResponse gjr = new GeneralJsonResponse(response);
		return gson.toJson(gjr);
	}

	protected Player getPlayerFromRequest(String userRequest) {
		Gson gson = new Gson();
		return gson.fromJson(userRequest, Player.class);
	}

}