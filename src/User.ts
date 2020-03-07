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

	place		:	Place
}

export interface ICreateUserInput extends Partial<User> {
	firstname	:	string;

	lastname	:	string;

	email		:	string;

	password	:	string;
}

export interface IUpdateUserInput extends Partial<User> {

	_id			:	string;
	
	firstname?	:	string;

	lastname?	:	string;

	email?		:	string;

	password?	:	string;

	role?		:	Roles;

	idPlace?	:	string;
}

export interface IAuthInput extends Partial<User> {
	email		:	string;

	password	:	string;
}

export interface IAuthData {
	userId		:	string;
}