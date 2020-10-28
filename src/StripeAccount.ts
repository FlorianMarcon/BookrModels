import { User } from "./User";

/**
 * Interface representing StripeAccount datas
 */
export interface StripeAccount{

	/** StripeAccount id */
	_id		:	number;
	
	/** Id of the User having this stripe account */
	idUser	:	number;

	/** Stripe access token */
	stripeAccountAccessToken		:	string;

	/** Stripe refresh token */
	stripeAccountRefreshToken		:	string;

	/** Stripe user id */
	stripeAccountStripeUserId		:	string;

	/**
	 * FIELD RESOLVERS
	 */

	/** User having the stripe account */
	user	:	User;
}
