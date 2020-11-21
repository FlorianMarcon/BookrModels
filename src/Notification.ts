import { Platform, Roles } from "./User";

/**
 * Input to send notifications
 */
export interface SendNotificationInput {

    title   :   string; /** Title of the notification */

    body    :   string; /** Body of the notification */
    
    payload?    :  NotificationPayload /** payload to send */   
} 

/**
 * Payload to send
 */
export interface NotificationPayload {

    link?    :  string /** Redirect to this link */   
} 

/**
 * Send notifications options
 */
export interface SendNotificationOptions {

    roles?       :   Array<Roles>; /** Filter by roles */

    idUsers?     :   Array<number>; /** Users id */

    platform?    :   Platform; /** Filter by platform */
} 