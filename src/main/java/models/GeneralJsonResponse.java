package models;

// Used to return error messages when things go wrong with the backend ie database access failed
public class GeneralJsonResponse {
	String type;

	public GeneralJsonResponse() {

	}

	public GeneralJsonResponse(String type) {
		this.type = type;
	}

	public String getType() {
		return type;
	}

	public void setType(String type) {
		this.type = type;
	}

}
