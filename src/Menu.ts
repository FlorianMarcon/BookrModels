import { Place } from "./Place";
import { Submenu } from "./Submenu";

export interface Menu {

	_id				:	number;

	name			:	string;

	description		:	string;

	price			:	number;

	place			:	Place;

	submenues		:	Array<Submenu>;
}

export interface ICreateMenu extends Partial<Menu> {
	name		:	string;

	description?		:	string;

	price				:	number;

}