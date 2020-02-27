import {Place} from "./Place";
import {Food} from "./Food";

export interface Submenu {

	_id				:	string;

	name			:	string;

	quantity		:	number;

	idMenu			:	string;

	place			:	Place;

	foods			:	Array<Food>;
}
