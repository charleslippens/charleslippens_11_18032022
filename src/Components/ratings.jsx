import disableStar from "../Assets/star_empty.svg";
import activeStar from "../Assets/star_full.svg";
import "../Styling/ratings.css";

function Ratings({ rating }) {
	const range = [1, 2, 3, 4, 5];
	return (
		<div className="rating-wrapper">
			{
				//La méthode map() crée un nouveau tableau avec les résultats de l'appel d'une fonction fournie sur chaque élément du tableau appelant.
				range.map((rangeElement) =>
					rating >= rangeElement ? (
						<img
							className="rating_star"
							key={rangeElement.toString()}
							src={activeStar}
							alt=""
						/>
					) : (
						<img
							className="rating_star"
							key={rangeElement.toString()}
							src={disableStar}
							alt=""
						/>
					)
				)
			}
		</div>
	);
}

export default Ratings;
