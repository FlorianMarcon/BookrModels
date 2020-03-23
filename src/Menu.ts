import { Place } from "./Place";
import { Submenu, ICreateSubmenuInput } from "./Submenu";

export interface Menu {

	_id				:	number;

	name			:	string;

	description		:	string;

	price			:	number;

	place			:	Place;

	submenues		:	Array<Submenu>;
}

export interface ICreateMenuInput extends Partial<Menu> {
	name		:	string;

	description?		:	string;

	price				:	number;

	createSubmenuesList?	:	Array<ICreateSubmenuInput>;
}

export interface IUpdateMenuInput extends Partial<Menu> {
	_id					:	number;

	name?				:	string;

	description?		:	string;

	price?				:	number;
}