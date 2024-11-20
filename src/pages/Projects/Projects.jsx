import food from "../Assets/food.jpg"
const Projects = () => {
    return (
        <div id="flex">
            <div className="card1">
                <img src={food}  />
                <div className="container">
                    <h4><b>Project One</b></h4>
                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Assumenda maxime, id, perspiciatis enim modi dignissimos nemo sint, fugit ratione placeat ad! Laborum, ipsam tenetur! Natus exercitationem aspernatur doloribus alias error.</p>
                </div>
            </div>




            <div className="card2">
                <img src={food} />
                <div className="container">
                    <h4><b>Project Two</b></h4>
                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Assumenda maxime, id, perspiciatis enim modi dignissimos nemo sint, fugit ratione placeat ad! Laborum, ipsam tenetur! Natus exercitationem aspernatur doloribus alias error.</p>
                </div>
            </div>

            <div className="card3">
                <img src={food} />
                <div className="container">
                    <h4><b>Project Three</b></h4>

                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Assumenda maxime, id, perspiciatis enim modi dignissimos nemo sint, fugit ratione placeat ad! Laborum, ipsam tenetur! Natus exercitationem aspernatur doloribus alias error.</p>
                </div>
            </div>






        </div>

    );
};

export default Projects;