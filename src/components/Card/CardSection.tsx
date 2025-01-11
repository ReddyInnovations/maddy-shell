import { cardInfo } from '@src/interfaces/common';
import Card from './Card';
import '../../styles/css/CardSection.css';

const CardSection: React.FC<{
  title: string;
  subtitle: string;
  cardInfoList: cardInfo[];
  borderColor?: string; // Add borderColor prop here
}> = ({ title, subtitle, cardInfoList, borderColor }) => {
  return (
    <section className="card-section">
      <div className="card-section-header">
        <h2 className="card-section-title">{title}</h2>
        <p className="card-section-subtitle">{subtitle}</p>
      </div>
      <div className="card-section-grid">
        {cardInfoList.map((cardInfo, index) => (
          <Card key={index} {...cardInfo} borderColor={borderColor} />
        ))}
      </div>
    </section>
  );
};

export default CardSection;
