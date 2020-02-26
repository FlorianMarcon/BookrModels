import {Place} from "./Place";

export enum Roles {
	ADMIN = "ADMIN",
	USER = "USER",
	PLACE = "PLACE"
};

export interface User{

	_id		:	string;
	
	firstname	:	string;

	lastname	:	string;

	email		:	string;

	password	:	string;

	role		:	Roles;

	idPlace		:	string;

	place?		:	Place
}