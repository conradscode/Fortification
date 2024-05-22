package models;

public class Player {

	private int id;
	private String name;
	private String password;
	private String type;
	private String dateSaved;

	public Player(int id, String name, String password) {
		this.id = id;
		this.name = name;
		this.password = password;
	}

	public Player(String name, String password) {
		this.name = name;
		this.password = password;
	}

	public Player() {
		// TODO Auto-generated constructor stub
	}

	public int getId() {
		return id;
	}

	public void setId(int id) {
		this.id = id;
	}

	public String getName() {
		return name;
	}

	public void setName(String name) {
		this.name = name;
	}

	public String getPassword() {
		return password;
	}

	public void setPassword(String password) {
		this.password = password;
	}

	public String getType() {
		return type;
	}

	public void setType(String type) {
		this.type = type;
	}

	public String getDateSaved() {
		return dateSaved;
	}

	public void setDateSaved(String dateSaved) {
		this.dateSaved = dateSaved;
	}

}
