import { Palette } from "./Palette";

/**
 * This interface represent variable present in Theme model 
 */
export interface Theme {

	_id	:	number; /** Object Id */

	primary?	:	Palette | undefined; /** Represent primary color */

	secondary?	:	Palette | undefined; /** Represent secondary color */

	background?	:	string | undefined; /** Background color */
}

export interface ICreateTheme {

	primary?	:	Palette | undefined | null; /** Represent primary color */

	secondary?	:	Palette | undefined | null; /** Represent secondary color */

	background?	:	string | undefined | null; /** Represent Background color */
}

export interface IUpdateTheme {

	primary?	:	Palette | undefined | null; /** Represent primary color */

	secondary?	:	Palette | undefined | null; /** Represent secondary color */
	
	background?	:	string | undefined | null; /** Represent Background color */
}
