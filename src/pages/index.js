import React from "react";
import theme from "theme";
import { Theme, Link, Image, Text, Button, Section } from "@quarkly/widgets";
import { Helmet } from "react-helmet";
import { GlobalQuarklyPageStyles } from "global-page-styles";
import { RawHtml, Override } from "@quarkly/components";
export default (() => {
	return <Theme theme={theme}>
		<GlobalQuarklyPageStyles pageUrl={"index"} />
		<Helmet>
			<title>
				Quarkly export
			</title>
			<meta name={"description"} content={"Web site created using quarkly.io"} />
			<link rel={"shortcut icon"} href={"https://uploads.quarkly.io/readme/cra/favicon-32x32.ico"} type={"image/x-icon"} />
		</Helmet>
		<Image src="https://uploads.quarkly.io/65e051a50072400020eaa433/images/imgimg.png?v=2024-02-29T09:45:53.475Z" display="block" srcSet="https://smartuploads.quarkly.io/65e051a50072400020eaa433/images/imgimg.png?v=2024-02-29T09%3A45%3A53.475Z&quality=85&w=500 500w,https://smartuploads.quarkly.io/65e051a50072400020eaa433/images/imgimg.png?v=2024-02-29T09%3A45%3A53.475Z&quality=85&w=800 800w,https://smartuploads.quarkly.io/65e051a50072400020eaa433/images/imgimg.png?v=2024-02-29T09%3A45%3A53.475Z&quality=85&w=1080 1080w,https://smartuploads.quarkly.io/65e051a50072400020eaa433/images/imgimg.png?v=2024-02-29T09%3A45%3A53.475Z&quality=85&w=1600 1600w,https://smartuploads.quarkly.io/65e051a50072400020eaa433/images/imgimg.png?v=2024-02-29T09%3A45%3A53.475Z&quality=85&w=2000 2000w,https://smartuploads.quarkly.io/65e051a50072400020eaa433/images/imgimg.png?v=2024-02-29T09%3A45%3A53.475Z&quality=85&w=2600 2600w,https://smartuploads.quarkly.io/65e051a50072400020eaa433/images/imgimg.png?v=2024-02-29T09%3A45%3A53.475Z&quality=85&w=3200 3200w" sizes="(max-width: 576px) 100vw,(max-width: 768px) 100vw,(max-width: 992px) 100vw,100vw" />
		<Section padding="80px 0" sm-padding="40px 0">
			<Override
				slot="SectionContent"
				align-items="flex-end"
				width="auto"
				min-width="200px"
				flex-direction="row"
				display="grid"
			/>
			<Text as="h2" font="--headline1" md-font="--headline2" margin="20px 0 0 0">
				NEW DOCUMENT NOTIFICATION
			</Text>
			<Text as="p" font="--lead" margin="20px 0 20px 0" text-align="center" />
			<Button
				font="--lead"
				margin="20px"
				text-decoration-line="underline"
				position="fixed"
				bottom="28px"
				height="46px"
				left="215px"
				right="auto"
				top="auto"
				width="236.664px"
				overflow-x="auto"
				href="https://www.google.com/"
			>
				CLICK HERE TO VIEW
			</Button>
		</Section>
		<Link
			font={"--capture"}
			font-size={"10px"}
			position={"fixed"}
			bottom={"12px"}
			right={"12px"}
			z-index={"4"}
			border-radius={"4px"}
			padding={"5px 12px 4px"}
			background-color={"--dark"}
			opacity={"0.6"}
			hover-opacity={"1"}
			color={"--light"}
			cursor={"pointer"}
			transition={"--opacityOut"}
			quarkly-title={"Badge"}
			text-decoration-line={"initial"}
			href={"https://quarkly.io/"}
			target={"_blank"}
		>
			Made on Quarkly
		</Link>
		<RawHtml>
			<style place={"endOfHead"} rawKey={"65e051a50072400020eaa431"}>
				{":root {\n  box-sizing: border-box;\n}\n\n* {\n  box-sizing: inherit;\n}"}
			</style>
		</RawHtml>
	</Theme>;
});