import React, { useState } from 'react';
import CardOption from '../../../../components/CardOption';
import { useParams } from 'react-router-dom';
import { CaptionApi } from '../../../../apis';
import toast from 'react-hot-toast';

const ScratchDetailPage = () => {
  const [captions, setCaptions] = useState([]);
  const [isCreateCaption, setIsCreateCaption] = useState(false);
  const [tone, setTone] = useState('Friendly');
  const [topic, setTopic] = useState('');
  const { detail } = useParams();

  const handleGenerateCaption = async () => {
    setIsCreateCaption(true);
    const data = {
      topic,
      socialNetwork: detail,
      tone,
    };
    const response = await CaptionApi.generateCaptionFromScratch(data);
    if (response.status === 200) {
      setCaptions(response.data);
    }
  };

  const handleSave = async (caption, index) => {
    const data = {
      topic,
      socialNetwork: detail,
      tone,
      caption,
    };
    const response = await CaptionApi.saveCaption(data);
    if (response.status === 200) {
      toast.success('Saved Successfully');
      // Create a new array excluding the saved caption
      const updatedCaptions = captions.filter((_, i) => i !== index);
      setCaptions(updatedCaptions);
    }
  };

  return (
    <div className='w-full py-4'>
      <div className='w-fit mx-auto max-w-[430px]'>
        <h2 className='text-2xl font-bold mb-6'>Facebook post</h2>
        <div className='flex flex-col'>
          <label htmlFor='topic' className='mb-2'>
            What topic do you want a caption for?
          </label>
          <input
            id='topic'
            type='text'
            className='border rounded-md px-3 py-2 min-w-[400px]'
            value={topic}
            onChange={(e) => setTopic(e.target.value)}
          />
        </div>
        <div className='flex flex-col mt-5'>
          <label htmlFor='sound' className='mb-2'>
            What should your caption sound like?
          </label>
          <select
            id='sound'
            className='border rounded-md px-3 py-2 min-w-[400px]'
            value={tone}
            onChange={(e) => setTone(e.target.value)}
          >
            <option value="Friendly">Friendly</option>
            <option value="Luxury">Luxury</option>
            <option value="Relaxed">Relaxed</option>
            <option value="Professional">Professional</option>
            <option value="Bold">Bold</option>
            <option value="Adventurous">Adventurous</option>
            <option value="Witty">Witty</option>
            <option value="Persuasive">Persuasive</option>
            <option value="Empathetic">Empathetic</option>
          </select>
        </div>
        <div className='flex justify-end my-2'>
          <button
            className='py-3 px-6 bg-[#E8EDFF] rounded-md hover:opacity-90'
            onClick={handleGenerateCaption}
          >
            Generate caption
          </button>
        </div>
        {isCreateCaption && (
          <div className='w-fit'>
            <h2 className='font-bold text-2xl mb-3'>Captions created for you</h2>
            {captions.map((caption, index) => (
              <CardOption
                key={index}
                content={caption.caption}
                topic={topic}
                isUnsave={false}
                handleSave={() => handleSave(caption.caption, index)}
              />
            ))}
          </div>
        )}
      </div>
    </div>
  );
};

export default ScratchDetailPage;
