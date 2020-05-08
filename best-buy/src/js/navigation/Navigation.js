import React from "react";
import styled from "styled-components";
import features from "./Features";
import { List, H3 } from "./../GlobalElements";

const NavigationPart = styled.nav`
  display: flex;
  flex-direction: column;
  align-items: center;
`;

const Title = styled.nav`
  font-weight: 400;
  font-size: 3.02rem;
  letter-spacing: 0;
  color: #000000;
  margin-top: 208px;
`;

const InfoText = styled.p`
  font-weight: 400;
  font-size: 1rem;
  margin: 2rem;
`;

const PromoButton = styled.a`
  background: var(--main-color) 0% 0% no-repeat padding-box;
  box-shadow: 5px 10px 14px #07ace629;
  border-radius: 40px;
  text-decoration: none;
  color: #ffffff;
  padding: 1.5rem 7rem;
  font: Bold 1rem Open Sans;
`;

const PromoBanner = styled.div`
  background-image: url("/assets/Background.png");
  background-position: center;
  background-size: contain;
  background-repeat: no-repeat;
  height: 594px;
  width: 100%;
`;

const FeatureSign = styled.div`
  width: 63px;
  height: 63px;
  border-radius: 50%;
  position: relative;
  display: flex;
  flex-direction: column;
  justify-content: center;
`;

const FeaturePic = styled.img`
  position: absolute;
  flex-direction: center;
  left: 2rem;
`;

const FeatureHolder = styled.li`
  display: flex;
  flex-direction: column;
  margin-bottom: 5rem;
`;

const FeatureCount = styled.span`
  font-size: 1.1rem;
  color: #000000;
  letter-spacing: 0.33rem;
  font: ExtraBold 20px/24px Raleway;
  font-weight: 800;
`;

const FeatureDescription = styled.span`
  color: #a5a5a5;
  opacity: 1;
  letter-spacing: 0px;
  font-weight: 400;
`;

const FeatureList = styled(List)`
  justify-content: space-evenly;
  flex-wrap: wrap;
  width:100%;
  ${FeatureHolder}:nth-child(3) ${FeatureSign} {
    background-color: var(--article-color-3);
  }
  ${FeatureHolder}:nth-child(1) ${FeatureSign} {
    background-color: var(--article-color-1);    
  }
  ${FeatureHolder}:nth-child(2) ${FeatureSign} {
    background-color: var(--article-color-2);    
  }
`;

const PromoHeader = styled(H3)`
  margin: 5rem 0 7rem;
`;

const createFeatures = (array) => {
  return array.features.map((feature) => (
    <FeatureHolder key={feature.text}>
      <FeatureSign>
        <FeaturePic src={feature.imgLink} />{" "}
      </FeatureSign>
      <FeatureCount>{feature.text}</FeatureCount>
      <FeatureDescription>{feature.description}</FeatureDescription>
    </FeatureHolder>
  ));
};

const Navigation = () => {
  return (
    <NavigationPart className="container">
      <Title>Sell More!</Title>
      <InfoText>Open shop on our platform and increase your sales</InfoText>
      <PromoButton href="#">Open your shop</PromoButton>
      <PromoBanner />
      <PromoHeader>The most popular sales platform in country</PromoHeader>
      <FeatureList>{createFeatures(features)}</FeatureList>
    </NavigationPart>
  );
};

export default Navigation;
