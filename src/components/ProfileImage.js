import React from 'react';

const ProfileImage = ({ src, alt, className, fallbackIcon = "fas fa-user" }) => {
  const [imageError, setImageError] = React.useState(false);

  const handleImageError = () => {
    setImageError(true);
  };

  return (
    <div className={`relative ${className}`}>
      {!imageError && src ? (
        <img 
          src={src} 
          alt={alt} 
          className="w-full h-full object-cover rounded-full"
          onError={handleImageError}
        />
      ) : (
        <div className="w-full h-full bg-gray-300 flex items-center justify-center rounded-full">
          <i className={`${fallbackIcon} text-8xl lg:text-9xl text-gray-600`}></i>
        </div>
      )}
    </div>
  );
};

export default ProfileImage;