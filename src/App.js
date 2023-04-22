import { useRef } from "react";
import page1 from "./images/page1.png";
import page2 from "./images/page2.png";
import photo2 from "./images/photo2.png";
import photo3 from "./images/photo3.png";
import photo4 from "./images/photo4.png";
import photo5 from "./images/photo5.png";
import bg1 from "./images/bg1.png";
import bg2 from "./images/bg2.png";
import photo1 from "./images/photo1.png";
import main from "./images/main.png";
import alex from "./images/alex.png";

import { Parallax, ParallaxLayer } from "@react-spring/parallax";

function App() {
	return (
		<div>
			<Parallax pages={10}>
				{/* <ParallaxLayer speed={1}>
					<h2>Season 1</h2>
				</ParallaxLayer> */}
				{/* 
				<ParallaxLayer offset={1} speed={0.5}>
					<h2>Web development is fun!</h2>
				</ParallaxLayer> */}

				{/* <ParallaxLayer
					offset={0}
					speed={0.5}
					factor={1}
					style={{
						backgroundImage: `url(${bg1})`,
						backgroundSize: "cover",
					}}
				/> */}
				<ParallaxLayer
					offset={0}
					speed={0.2}
					style={{
						backgroundImage: `url(${photo1})`,
						backgroundSize: "100% 100%",
					}}
				/>

				<ParallaxLayer
					offset={1}
					speed={0.2}
					style={{
						backgroundImage: `url(${main})`,
						backgroundSize: "100% 100%",
					}}
				/>

				<ParallaxLayer
					offset={2}
					speed={0.5}
					factor={1}
					style={{
						backgroundImage: `url(${bg2})`,
						backgroundSize: "cover",
					}}
				/>

				<ParallaxLayer
					offset={2}
					speed={0.7}
					style={{
						backgroundImage: `url(${photo2})`,
						backgroundSize: "100% 100%",
					}}
				></ParallaxLayer>

				<ParallaxLayer offset={2} speed={0.65}>
					<img
						src={alex}
						style={{
							height: "40%",
							// position bottom right
							position: "absolute",
							bottom: "0",
							right: "0",
						}}
					/>
				</ParallaxLayer>

				<ParallaxLayer
					offset={3}
					speed={0.2}
					style={{
						backgroundImage: `url(${photo3})`,
						backgroundSize: "100% 100%",
					}}
				></ParallaxLayer>

				<ParallaxLayer
					offset={4}
					speed={0.5}
					factor={1}
					style={{
						backgroundImage: `url(${page2})`,
						backgroundSize: "cover",
					}}
				/>

				<ParallaxLayer
					offset={4}
					speed={0.7}
					style={{
						backgroundImage: `url(${photo4})`,
						backgroundSize: "100% 100%",
					}}
				></ParallaxLayer>

				<ParallaxLayer
					offset={5}
					speed={0.2}
					style={{
						backgroundImage: `url(${photo5})`,
						backgroundSize: "100% 100%",
					}}
				></ParallaxLayer>

				{/* <ParallaxLayer
					sticky={{ start: 2, end: 3.5 }}
					style={{ textAlign: "center", transform: "scale(0.5)" }}
				>
					<img src={me} />
				</ParallaxLayer> */}

				{/* <ParallaxLayer offset={0.2} speed={0.05}>
					<h2>Season 1</h2>
				</ParallaxLayer> */}

				{/* <ParallaxLayer offset={3} speed={2}>
					<h2>Hi Mom!</h2>
				</ParallaxLayer> */}
			</Parallax>
		</div>
	);
}

export default App;
