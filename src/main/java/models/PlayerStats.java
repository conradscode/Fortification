package models;

public class PlayerStats {

	private int id;
	private String dateSaved;
	private String profilePicture = "img/playerpics/peasant.png";
	// Default values for a new player
	private int health = 100;
	private int maxHealth = 100;
	private int money = 1000;

	public PlayerStats(int id, int health, int maxHealth, int money, String dateSaved, String profilePicture) {
		this.id = id;
		this.health = health;
		this.maxHealth = maxHealth;
		this.money = money;
		this.dateSaved = dateSaved;
		this.profilePicture = profilePicture;
	}

	public PlayerStats(int health, int maxHealth, int money, String dateSaved, String profilePicture) {
		this.health = health;
		this.maxHealth = maxHealth;
		this.money = money;
		this.dateSaved = dateSaved;
		this.profilePicture = profilePicture;
	}

	public PlayerStats() {

	}

	public int getId() {
		return id;
	}

	public void setId(int id) {
		this.id = id;
	}

	public int getHealth() {
		return health;
	}

	public void setHealth(int health) {
		this.health = health;
	}

	public int getMaxHealth() {
		return maxHealth;
	}

	public void setMaxHealth(int maxHealth) {
		this.maxHealth = maxHealth;
	}

	public int getMoney() {
		return money;
	}

	public void setMoney(int money) {
		this.money = money;
	}

	public String getDateSaved() {
		return dateSaved;
	}

	public void setDateSaved(String dateSaved) {
		this.dateSaved = dateSaved;
	}

	public String getProfilePicture() {
		return profilePicture;
	}

	public void setProfilePicture(String profilePicture) {
		this.profilePicture = profilePicture;
	}

}
