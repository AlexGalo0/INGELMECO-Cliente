import Image from "next/image";
interface CardProps {
    backgroundColor: string;
    imageSrc: string;
    textColor: string;
    title: string;
    description: string;
  }
  const Card: React.FC<CardProps> = ({
    backgroundColor,
    imageSrc,
    textColor,
    title,
    description,
  }) => {
    const cardStyle = {
      backgroundColor: backgroundColor,
      padding: '3rem',
      maxWidth: '300px',
      margin: 'auto',
      boxShadow: '-14px 14px   #394867',
      borderRadius: '10px',
      marginBottom: '3rem',
    };
  
    const titleStyle = {
      color: textColor,
    };
  
    const descriptionStyle = {
      color: textColor,
    };
  
    return (
      <div style={cardStyle} className="w-full md:w-1/3 px-4">
        <div className="mb-3">
          <div className="flex justify-center mb-4">
            <Image
              src={imageSrc}
              width={90}
              height={80}
              alt="Valores de INGELMECO"
            />
          </div>
        </div>
        <h2 style={titleStyle} className="text-2xl font-bold mb-2">
          {title}
        </h2>
        <div className="max-w-[300px]">
          <p style={descriptionStyle} className="text-lg">
            {description}
          </p>
        </div>
      </div>
    );
  };
  

export default Card;
