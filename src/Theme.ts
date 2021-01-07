/**
 * This interface represent variable present in Theme model 
 */
export interface Theme {

	_id	:	number; /** Object Id */

	primaryColor?	:	string | undefined; /** Represent primary color */

	secondaryColor?	:	string | undefined; /** Represent secondary color */
}

export interface ICreateTheme {

	primaryColor?	:	string | undefined; /** Represent primary color */

	secondaryColor?	:	string | undefined; /** Represent secondary color */
}

export interface IUpdateTheme {

	primaryColor?	:	string | undefined; /** Represent primary color */

	secondaryColor?	:	string | undefined; /** Represent secondary color */
}