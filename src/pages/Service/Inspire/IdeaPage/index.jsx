import React, { useEffect, useState } from 'react';
import CardOption from '../../../../components/CardOption';
import { useLocation } from 'react-router-dom';
import { CaptionApi, IdeaApi } from '../../../../apis';
import toast from 'react-hot-toast';

const IdeaInspirePage = () => {
  const [step, setStep] = useState(1);
  const [isCreateCaption, setIsCreateCaption] = useState(false);
  const [ideas, setIdeas] = useState([]);
  const [idea, setIdea] = useState('');
  const [captions, setCaptions] = useState([]);
  const location = useLocation();
  const { topic } = location.state;

  useEffect(() => {
    try {
      const generateIdeas = async () => {
        const response = await IdeaApi.generateIdeasFromAI({ topic });
        if (response.status === 200) {
          setIdeas(response.data);
        }
      };
      generateIdeas();
    } catch (error) {
      console.log(error);
    }
  }, [topic]);

  const handleSelectIdea = (idea) => {
    setStep(2);
    setIdea(idea);
  };

  const handleCreateCaption = async () => {
    setIsCreateCaption(true);
    const response = await CaptionApi.generateCaptionFromIdea({ idea });
    if (response.status === 200) {
      setCaptions(response.data);
    }
  };

  const handleSave = async (caption, index) => {
    const data = {
      topic: idea,
      caption,
    };
    const response = await CaptionApi.saveCaption(data);
    if (response.status === 200) {
      toast.success('Saved Successfully');
      // Create a new array without the saved caption
      const updatedCaptions = captions.filter((_, i) => i !== index);
      setCaptions(updatedCaptions);
    }
  };

  return (
    <div className='flex-1 p-20'>
      {step === 1 && (
        <>
          <div className='w-[430px]'>
            <h1 className='font-bold text-2xl'>Get Inspired</h1>
            <p className='mt-10 mb-3 font-semibold'>Choose an idea to build some posts</p>
          </div>
          <div className='w-[430px]'>
            <h1 className='font-bold text-2xl mb-3'>Your Idea</h1>
            {ideas.map((idea, index) => (
              <div
                key={index}
                className='border rounded-md border-gray-300 py-4 px-2 mb-3 hover:bg-gray-50 cursor-pointer'
                onClick={() => handleSelectIdea(idea)}
              >
                {idea}
              </div>
            ))}
          </div>
        </>
      )}

      {step === 2 && (
        <>
          <h2 className='font-bold text-2xl mb-3'>Your Idea</h2>
          <div className='border rounded-md border-gray-300 py-4 px-2 mb-3 hover:bg-gray-50 cursor-pointer'>
            {idea}
          </div>
          <div className='flex justify-end my-2'>
            <button className='py-3 px-6 bg-[#E8EDFF] rounded-md hover:opacity-90' onClick={handleCreateCaption}>
              Create caption
            </button>
          </div>
          {isCreateCaption && (
            <>
              <h2 className='font-bold text-2xl mb-3'>Captions created for you</h2>
              {captions.map((caption, index) => (
                <CardOption
                  key={index}
                  content={caption}
                  topic={idea}
                  isUnsave={false}
                  handleSave={() => handleSave(caption, index)}
                />
              ))}
            </>
          )}
        </>
      )}
    </div>
  );
};

export default IdeaInspirePage;
