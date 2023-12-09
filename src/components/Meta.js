import React from "react";
import { Helmet } from "react-helmet";

function Meta(prop) {
	return (
		<Helmet>
            <meta charSet="utf-8" />
            <title>{prop.title}</title>
        </Helmet>
	);
}
export default Meta;
