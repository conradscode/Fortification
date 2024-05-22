package models;

public class PlayerStatsJsonResponse {

	Player p;
	PlayerStats ps;
	PlayerResource r;
	PlayerSkills psk;

	public PlayerStatsJsonResponse() {
	}

	public PlayerStatsJsonResponse(Player p, PlayerStats ps, PlayerResource r, PlayerSkills psk) {
		this.p = p;
		this.r = r;
		this.ps = ps;
		this.psk = psk;
	}

	public Player getP() {
		return p;
	}

	public void setP(Player p) {
		this.p = p;
	}

	public PlayerResource getR() {
		return r;
	}

	public void setR(PlayerResource r) {
		this.r = r;
	}

	public PlayerStats getPs() {
		return ps;
	}

	public void setPs(PlayerStats ps) {
		this.ps = ps;
	}

	public PlayerSkills getPsk() {
		return psk;
	}

	public void setPsk(PlayerSkills psk) {
		this.psk = psk;
	}

}