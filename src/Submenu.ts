import {Place} from "./Place";
import {Food} from "./Food";
import { Menu } from "./Menu";

export interface Submenu {

	_id				:	number;

	name			:	string;

	quantity		:	number;

	place			:	Place;

	foods			:	Array<Food>;

	menu?			:	Menu;
}


export interface ICreateSubmenuInput  extends Partial<Submenu> {

	name				:	string;

	quantity?			:	number;

	idFoods?			:	number[];

	idMenu				:	number | null;
}