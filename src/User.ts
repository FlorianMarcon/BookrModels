import {Place} from "./Place";
import UserNotification from "./UserNotification";

export enum Roles {
	ADMIN = "ADMIN",
	USER = "USER",
	PLACE = "PLACE",
	PLACE_EMPLOYEE = "PLACE_EMPLOYEE",
};

export enum Platform {
	IOS = "IOS",
	ANDROID = "ANDROID",
	WEB = "WEB"
};

export interface User{

	_id		:	number;
	
	firstname	:	string;

	lastname	:	string;

	email		:	string;

	password	:	string;

	role		:	Roles;

	place		:	Place

	favorites	:	Array<Place>;
}

export interface ICreateUserInput extends Partial<User> {
	firstname	:	string;

	lastname	:	string;

	email		:	string;

	password	:	string;
}

export interface IUpdateUserInput extends Partial<User> {

	_id?			:	number;
	
	firstname?	:	string;

	lastname?	:	string;

	email?		:	string;

	password?	:	string;

	role?		:	Roles;

	idPlace?	:	number;

	userNotification?:	UserNotification;
}


/**
 * An optional full name shared by the user.
 *
 * These fields are populated with values that the user authorized.
 */
export interface IAppleAuthFullNameInput {
	/**
	 * Pre-nominal letters denoting title, salutation, or honorific, e.g. Dr., Mr.
	 */
	namePrefix: string | null;
  
	/**
	 * Name bestowed upon an individual by one's parents, e.g. Johnathan
	 */
	givenName: string;
  
	/**
	 * Secondary given name chosen to differentiate those with the same first name, e.g. Maple
	 */
	middleName: string | null;
  
	/**
	 * Name passed from one generation to another to indicate lineage, e.g. Appleseed
	 */
	familyName: string;
  
	/**
	 * Post-nominal letters denoting degree, accreditation, or other honor, e.g. Esq., Jr., Ph.D.
	 */
	nameSuffix: string | null;
  
	/**
	 * Name substituted for the purposes of familiarity, e.g. "Johnny"
	 */
	nickname: string | null;
}

export interface IAuthInput extends Partial<User> {
	email		:	string;

	password	:	string;
}

export interface IAuthData {
	userId		:	number;
}

export interface QUsersOptions {

	/**
	 * Filter by roles
	 */
	roles?		:	Array<Roles>;
}