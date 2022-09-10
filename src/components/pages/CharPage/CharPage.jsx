import { useParams, useNavigate } from "react-router-dom";
import { useMemo, useState, useEffect } from "react";
import useMarvelService from "../../../services/marvelService";
import Ads from "../../Ads/Ads";
import styled from "styled-components";
import Error from "../../Error/Error";
import Spinner from "../../Spinner/Spinner";

export function CharPage() {
	const { charId } = useParams();
	const [char, setChar] = useState({
		thumbnail: ""
	});
  const { error, loading, getCharacterById } = useMarvelService();
  const navigate = useNavigate();

  useEffect(() => {
    getCharacterById(charId)
	 	.then(res => setChar(res));
  }, [charId]);

  const renderItems = () => {
    return (
      <Wrapper>
        <div className="image">
          <img src={char.thumbnail} alt={char.name} />
        </div>
        <div className="info">
          <h2>{char.name}</h2>
          <p className="description">
            {char.description ? (char.description) : <span>Unfortunately, no additional information provided<span role="img" aria-label="sheep">😑</span></span>}
          </p>
        </div>
		  <div className="back"> 
			<div onClick={() => navigate(-1)}>Back to all</div>
		  </div>
      </Wrapper>
    );
  };

  const _error = useMemo(() => (error ? <AdditionalWrapper><Error /></AdditionalWrapper>  : null), [error]);
  const _loading = useMemo(() => (loading ? <AdditionalWrapper><Spinner /></AdditionalWrapper> : null), [loading]);
  const _contents = !(error || loading) ? renderItems() : null;
  return (
    <>
		<Ads/>
      {_error}
      {_contents}
      {_loading}
    </>
  );
}

const Wrapper = styled.div`
  display: flex;
  align-items: stretch;
  justify-content: stretch;
  width: 100%;
  img {
    width: 293px;
    max-height: 450px;
    margin-right: 50px;
	 flex-grow: 0;
  }
  .info {
    font-family: "Roboto Condensed";
    color: #000000;
    font-weight: 400;
    font-size: 18px;
    line-height: 21px;
	 flex-grow: 1;
	 max-width: 650px;
    h2 {
      font-weight: 700;
      font-size: 22px;
      line-height: 26px;
      margin-bottom: 25px;
    }
    h3 {
      font-weight: 700;
      font-size: 24px;
      line-height: 28px;
      color: #9f0013;
    }
    .description {
      margin-bottom: 25px;
    }
    .language {
      margin-bottom: 25px;
    }
    .pageCount {
      margin-bottom: 25px;
    }
  }
	.back {
		width: 150px;
		text-align: end;
		font-weight: 700;
		font-size: 18px;
		line-height: 21px;
		font-family: 'Roboto Condensed';
		cursor: pointer;
	}
`;

const AdditionalWrapper = styled.div`
	width: 100%;
	display: grid;
	place-items: center;
`;