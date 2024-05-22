package models;

public class PlayerResource {

	private int id;
	// Default values for a new player
	private int wood = 0;
	private int copper = 0;
	private int iron = 0;
	private int gold = 0;
	private int titanium = 0;
	private int fish = 0;
	private int copperForges = 0;
	private int ironForges = 0;
	private int goldForges = 0;
	private int titaniumForges = 0;

	public PlayerResource(int id, int wood, int copper, int iron, int gold, int titanium, int fish, int copperForges,
			int ironForges, int goldForges, int titaniumForges) {
		this.id = id;
		this.wood = wood;
		this.copper = copper;
		this.iron = iron;
		this.gold = gold;
		this.titanium = titanium;
		this.fish = fish;
		this.copperForges = copperForges;
		this.ironForges = ironForges;
		this.goldForges = goldForges;
		this.titaniumForges = titaniumForges;
	}

	public PlayerResource(int wood, int copper, int iron, int gold, int titanium, int fish, int copperForges,
			int ironForges, int goldForges, int titaniumForges) {
		this.wood = wood;
		this.copper = copper;
		this.iron = iron;
		this.gold = gold;
		this.titanium = titanium;
		this.fish = fish;
		this.copperForges = copperForges;
		this.ironForges = ironForges;
		this.goldForges = goldForges;
		this.titaniumForges = titaniumForges;
	}

	public PlayerResource() {

	}

	public int getId() {
		return id;
	}

	public void setId(int id) {
		this.id = id;
	}

	public int getWood() {
		return wood;
	}

	public void setWood(int wood) {
		this.wood = wood;
	}

	public int getCopper() {
		return copper;
	}

	public void setCopper(int copper) {
		this.copper = copper;
	}

	public int getIron() {
		return iron;
	}

	public void setIron(int iron) {
		this.iron = iron;
	}

	public int getGold() {
		return gold;
	}

	public void setGold(int gold) {
		this.gold = gold;
	}

	public int getTitanium() {
		return titanium;
	}

	public void setTitanium(int titanium) {
		this.titanium = titanium;
	}

	public int getFish() {
		return fish;
	}

	public void setFish(int fish) {
		this.fish = fish;
	}

	public int getCopperForges() {
		return copperForges;
	}

	public void setCopperForges(int copperForges) {
		this.copperForges = copperForges;
	}

	public int getIronForges() {
		return ironForges;
	}

	public void setIronForges(int ironForges) {
		this.ironForges = ironForges;
	}

	public int getGoldForges() {
		return goldForges;
	}

	public void setGoldForges(int goldForges) {
		this.goldForges = goldForges;
	}

	public int getTitaniumForges() {
		return titaniumForges;
	}

	public void setTitaniumForges(int titaniumForges) {
		this.titaniumForges = titaniumForges;
	}

}
