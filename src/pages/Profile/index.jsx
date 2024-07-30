import React, { useEffect, useState } from 'react';
import CardOption from '../../components/CardOption';
import { CaptionApi } from '../../apis';
import toast from 'react-hot-toast';

const ProfilePage = () => {
  const [captions, setCaptions] = useState([]);
  const [isUnsave, setIsUnsave] = useState(false);

  useEffect(() => {
    const fetchCaptions = async () => {
      const response = await CaptionApi.getCaptions();
      if (response.status === 200) {
        setCaptions(response.data);
        setIsUnsave(false);
      }
    }

    fetchCaptions();
  }, [isUnsave]);

  const handleUnSaveCaption = async (id) => {
    const response = await CaptionApi.unSaveCaption(id);
    if (response.status === 200) {
      setIsUnsave(true);
      toast.success('Unsaved Successfully');
    }
  }

  return (
    <div className='flex-1 p-20'>
      <div className='w-full'>
        <h1 className='font-bold text-2xl'>Saved Content</h1>
        <div className='mt-10'>
          {
            captions.map(captionList => <div className=''>
              <p className='font-semibold mb-4'>{captionList.topic}</p>
              <div className='grid grid-cols-2 gap-20'>
                {
                  captionList.captions.map(caption => <CardOption
                    key={caption.id}
                    topic={captionList.topic}
                    isUnsave={true}
                    content={caption.caption}
                    handleUnsave={() => { handleUnSaveCaption(caption.id) }}
                  />)
                }
              </div>
            </div>)
          }
        </div>
      </div>
    </div>
  );
};

export default ProfilePage;
