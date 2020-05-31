import {Place} from "./Place";
import UserNotification from "./UserNotification";

export enum Roles {
	ADMIN = "ADMIN",
	USER = "USER",
	PLACE = "PLACE"
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

	_id			:	number;
	
	firstname?	:	string;

	lastname?	:	string;

	email?		:	string;

	password?	:	string;

	role?		:	Roles;

	idPlace?	:	number;

	userNotification?:	UserNotification;
}

export interface IAuthInput extends Partial<User> {
	email		:	string;

	password	:	string;
}

export interface IAuthData {
	userId		:	number;
}