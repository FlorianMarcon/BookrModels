import { Palette } from "./Palette";

/**
 * This interface represent variable present in Theme model 
 */
export interface Theme {

	_id	:	number; /** Object Id */

	primary?	:	Palette | undefined; /** Represent primary color */

	secondary?	:	Palette | undefined; /** Represent secondary color */
}

export interface ICreateTheme {

	primary?	:	Palette | undefined | null; /** Represent primary color */

	secondary?	:	Palette | undefined | null; /** Represent secondary color */
}

export interface IUpdateTheme {

	primary?	:	Palette | undefined | null; /** Represent primary color */

	secondary?	:	Palette | undefined | null; /** Represent secondary color */
}
