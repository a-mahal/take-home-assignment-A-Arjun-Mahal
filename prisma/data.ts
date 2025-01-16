import { randomUUID } from 'crypto'

export const getSeedData = async () => {
  // Updated the seed information to fix the changed schema
  const formData = [
    {
      id: randomUUID(),
      question:
        'Do you have any history of chronic diseases, such as diabetes, hypertension, or cardiovascular diseases?',
      answer: 'No',
      title: '',
      description: '',
      createdAt: '',
      updatedAt: '',
      status: '', 
    },
    {
      id: randomUUID(),
      question: 'Are you currently taking any prescription medications?',
      answer: 'Yes, antihypertensive medication',
      title: '',
      description: '',
      createdAt: '',
      updatedAt: '',
      status: '',  
    },
    {
      id: randomUUID(),
      question: 'Have you ever had an allergic reaction to any medications?',
      answer: 'Yes, I am allergic to penicillin.',
      title: '',
      description: '',
      createdAt: '',
      updatedAt: '',
      status: '', 
    },
    {
      id: randomUUID(),
      question: 'Do you smoke tobacco or use any nicotine products?',
      answer: 'No',
      title: '',
      description: '',
      createdAt: '',
      updatedAt: '',
      status: '', 
    },
    {
      id: randomUUID(),
      question: 'Do you regularly exercise or engage in physical activity?',
      answer: 'Yes, I walk for 30 minutes every day.',
      title: '',
      description: '',
      createdAt: '',
      updatedAt: '',
      status: '',  
    },
    {
      id: randomUUID(),
      question: 'Do you have a family history of cancer?',
      answer: 'Yes, my mother had breast cancer.',
      title: '',
      description: '',
      createdAt: '',
      updatedAt: '',
      status: '',  
    },
    {
      id: randomUUID(),
      question: 'Have you ever been hospitalized for any reason?',
      answer: 'Yes, I was hospitalized for surgery in 2019.',
      title: '',
      description: '',
      createdAt: '',
      updatedAt: '',
      status: '', 
    },
    {
      id: randomUUID(),
      question: 'Do you have any known food allergies?',
      answer: 'No',
      title: '',
      description: '',
      createdAt: '',
      updatedAt: '',
      status: '',  
    },
    {
      id: randomUUID(),
      question: 'Do you experience any frequent or chronic headaches?',
      answer: 'No',
      title: '',
      description: '',
      createdAt: '',
      updatedAt: '',
      status: '',  
    },
    {
      id: randomUUID(),
      question:
        'Do you have any problems with your vision, such as blurred vision or eye strain?',
      answer:
        'Occasionally, I experience eye strain after long periods of screen use.',
      title: '',
      description: '',
      createdAt: '',
      updatedAt: '',
      status: '',  
    },
  ]

  return {
    formData,
  }
}
