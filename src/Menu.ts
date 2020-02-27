import { Place } from "./Place";
import { Submenu } from "./Submenu";

export interface Menu {

	_id				:	string;

	name			:	string;

	description?		:	string;

	price			:	number;

	place?			:	Place;

	submenues?		:	Array<Submenu>;
}