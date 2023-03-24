<?php
/**
 * The base configuration for WordPress
 *
 * The wp-config.php creation script uses this file during the installation.
 * You don't have to use the web site, you can copy this file to "wp-config.php"
 * and fill in the values.
 *
 * This file contains the following configurations:
 *
 * * Database settings
 * * Secret keys
 * * Database table prefix
 * * ABSPATH
 *
 * @link https://wordpress.org/support/article/editing-wp-config-php/
 *
 * @package WordPress
 */

// ** Database settings - You can get this info from your web host ** //
/** The name of the database for WordPress */
define( 'DB_NAME', 'wordpress2' );

/** Database username */
define( 'DB_USER', 'root' );

/** Database password */
define( 'DB_PASSWORD', '' );

/** Database hostname */
define( 'DB_HOST', 'localhost' );

/** Database charset to use in creating database tables. */
define( 'DB_CHARSET', 'utf8mb4' );

/** The database collate type. Don't change this if in doubt. */
define( 'DB_COLLATE', '' );

/**#@+
 * Authentication unique keys and salts.
 *
 * Change these to different unique phrases! You can generate these using
 * the {@link https://api.wordpress.org/secret-key/1.1/salt/ WordPress.org secret-key service}.
 *
 * You can change these at any point in time to invalidate all existing cookies.
 * This will force all users to have to log in again.
 *
 * @since 2.6.0
 */
define( 'AUTH_KEY',         '$B]kLQLm6R?n us=(;h;%>4du|5&S J7^B$jnA5ho]B)B[-zCvQS!o(FH Qo+k.S' );
define( 'SECURE_AUTH_KEY',  '.`f(Vk?hN}4%W?rcqk<Z=1gi|y5bD9SA}[We,hPz[Q7.FA#TLk3O0ltphF*ST,`y' );
define( 'LOGGED_IN_KEY',    'Vg/U:&s/v?M9[8O0F*d|XE.GblImqXl+?NVUb;iZ05R8~:9:mlO:r4$YwNRz||.*' );
define( 'NONCE_KEY',        '&X0b@b<T4}S&p*))CmrJI+/g}~OxIbT|xPF0JrwVt:*3.}=rRq&:}K-2TRpvna!_' );
define( 'AUTH_SALT',        '#YJTC~j~_}El^BylJ,-&4h{Z&x4a]>:lP$SFG0La_Mq4hT9uA>keME_N&m_ukz0(' );
define( 'SECURE_AUTH_SALT', ' ET5YjHtdV~c^Z;#m`d6[*%A;g,`A1X.JZrR<UVC( =].7v)6g/jRwK_6{j@n3nY' );
define( 'LOGGED_IN_SALT',   '%?^mH2;npY#_ (.ONOzY]+UAW!C#;Z9,CP*M7{Re_C=5+8VawQp}2[yz+O%pdNzZ' );
define( 'NONCE_SALT',       'vjA%^h3q`D{}90yr>Q7<7:N2krha7K0r8%RIzvUBJ2_([t9tIR$$Y0gHWReZq^s_' );

/**#@-*/

/**
 * WordPress database table prefix.
 *
 * You can have multiple installations in one database if you give each
 * a unique prefix. Only numbers, letters, and underscores please!
 */
$table_prefix = 'wp_';

/**
 * For developers: WordPress debugging mode.
 *
 * Change this to true to enable the display of notices during development.
 * It is strongly recommended that plugin and theme developers use WP_DEBUG
 * in their development environments.
 *
 * For information on other constants that can be used for debugging,
 * visit the documentation.
 *
 * @link https://wordpress.org/support/article/debugging-in-wordpress/
 */
define( 'WP_DEBUG', false );

/* Add any custom values between this line and the "stop editing" line. */



/* That's all, stop editing! Happy publishing. */

/** Absolute path to the WordPress directory. */
if ( ! defined( 'ABSPATH' ) ) {
	define( 'ABSPATH', __DIR__ . '/' );
}

/** Sets up WordPress vars and included files. */
require_once ABSPATH . 'wp-settings.php';
