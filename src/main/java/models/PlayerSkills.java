package models;

public class PlayerSkills {
	private int id;
	// Default values for a new player
	private int fishSkill = 1;
	private int fishXp = 0;
	private int fishMaxXp = 100;
	private int woodSkill = 1;
	private int woodXp = 0;
	private int woodMaxXp = 100;
	private int fightSkill = 1;
	private int fightXp = 0;
	private int fightMaxXp = 100;
	private int thiefSkill = 1;
	private int thiefXp = 0;
	private int thiefMaxXp = 100;
	private int maxSkill = 99;

	public PlayerSkills(int id, int fishSkill, int fishXp, int fishMaxXp, int woodSkill, int woodXp, int woodMaxXp,
			int fightSkill, int fightXp, int fightMaxXp, int thiefSkill, int thiefXp, int thiefMaxXp) {
		this.id = id;
		this.fishSkill = fishSkill;
		this.fishXp = fishXp;
		this.fishMaxXp = fishMaxXp;
		this.woodSkill = woodSkill;
		this.woodXp = woodXp;
		this.woodMaxXp = woodMaxXp;
		this.fightSkill = fightSkill;
		this.fightXp = fightXp;
		this.fightMaxXp = fightMaxXp;
		this.thiefSkill = thiefSkill;
		this.thiefXp = thiefXp;
		this.thiefMaxXp = thiefMaxXp;
	}

	public PlayerSkills(int fishSkill, int fishXp, int fishMaxXp, int woodSkill, int woodXp, int woodMaxXp,
			int fightSkill, int fightXp, int fightMaxXp, int thiefSkill, int thiefXp, int thiefMaxXp) {
		this.fishSkill = fishSkill;
		this.fishXp = fishXp;
		this.fishMaxXp = fishMaxXp;
		this.woodSkill = woodSkill;
		this.woodXp = woodXp;
		this.woodMaxXp = woodMaxXp;
		this.fightSkill = fightSkill;
		this.fightXp = fightXp;
		this.fightMaxXp = fightMaxXp;
		this.thiefSkill = thiefSkill;
		this.thiefXp = thiefXp;
		this.thiefMaxXp = thiefMaxXp;
	}

	public PlayerSkills() {

	}

	public int getId() {
		return id;
	}

	public void setId(int id) {
		this.id = id;
	}

	public int getFishSkill() {
		return fishSkill;
	}

	public void setFishSkill(int fishSkill) {
		this.fishSkill = fishSkill;
	}

	public int getFishXp() {
		return fishXp;
	}

	public void setFishXp(int fishXp) {
		this.fishXp = fishXp;
	}

	public int getFishMaxXp() {
		return fishMaxXp;
	}

	public void setFishMaxXp(int fishMaxXp) {
		this.fishMaxXp = fishMaxXp;
	}

	public int getWoodSkill() {
		return woodSkill;
	}

	public void setWoodSkill(int woodSkill) {
		this.woodSkill = woodSkill;
	}

	public int getWoodXp() {
		return woodXp;
	}

	public void setWoodXp(int woodXp) {
		this.woodXp = woodXp;
	}

	public int getWoodMaxXp() {
		return woodMaxXp;
	}

	public void setWoodMaxXp(int woodMaxXp) {
		this.woodMaxXp = woodMaxXp;
	}

	public int getFightSkill() {
		return fightSkill;
	}

	public void setFightSkill(int fightSkill) {
		this.fightSkill = fightSkill;
	}

	public int getFightXp() {
		return fightXp;
	}

	public void setFightXp(int fightXp) {
		this.fightXp = fightXp;
	}

	public int getFightMaxXp() {
		return fightMaxXp;
	}

	public void setFightMaxXp(int fightMaxXp) {
		this.fightMaxXp = fightMaxXp;
	}

	public int getThiefSkill() {
		return thiefSkill;
	}

	public void setThiefSkill(int thiefSkill) {
		this.thiefSkill = thiefSkill;
	}

	public int getThiefXp() {
		return thiefXp;
	}

	public void setThiefXp(int thiefXp) {
		this.thiefXp = thiefXp;
	}

	public int getThiefMaxXp() {
		return thiefMaxXp;
	}

	public void setThiefMaxXp(int thiefMaxXp) {
		this.thiefMaxXp = thiefMaxXp;
	}

	public int getMaxSkill() {
		return maxSkill;
	}

	public void setMaxSkill(int maxSkill) {
		this.maxSkill = maxSkill;
	}

}
