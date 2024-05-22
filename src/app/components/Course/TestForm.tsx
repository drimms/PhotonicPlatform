import { useParams } from 'next/navigation';
import React, { useState, useEffect } from 'react';
import result from '../../lib/assets/icon/resultcat.gif'
import Image from "next/image";
import './Quest.css';
import { Button, Form } from 'react-bootstrap';


const TestForm = ({test}) => {
    const [quest, setLabs] = useState([]);
    const [load, setLoad] = useState(false);
    const course = useParams();

    useEffect(() => {
        // Фильтруем и перемешиваем вопросы
        const shuffledQuestions = test
            .filter(quest => quest.QuestionsCourseId === 3)
            .sort(() => Math.random() - 0.5);

        // Устанавливаем отфильтрованные и перемешанные вопросы в состояние
        setLabs(shuffledQuestions);
        setLoad(true);
    }, [test]);

    const [step, setStep] = useState(0);
    const [correct, setCorrect] = useState(0);
    const [openQuest, setQuest] = useState();
    const question = quest[step];
    console.log(question, '----')
    let progress = Math.round(step / quest.length * 100);
    const handleClick = (index) => {
        setStep(step + 1)
        let ans = [question.oneansTrue, question.twoansTrue, question.threeansTrue, question.fouranswerTrue]
        if (1 == (ans[index])) {
            setCorrect(correct + 1)
        }     
    }

    function handleOpenClick(event) {
        event.preventDefault()
        setStep(step + 1);
        let ans = question.oneans;
        if (parseInt(openQuest, 10) == (parseInt(ans, 10))) {
            setCorrect(correct + 1);
        }
    }
    return (
        <>
           <div className='block-test'>
            <div className="progress">
                <div style={{ width: `${progress}%` }} className="progress__inner"></div>
            </div>

                { load 
                    ? step != quest.length 
                        ? (
                        <div>
                            <h5>{question.titleAnswer}</h5>
                        {question.typequest && <ul className='ul'>
                            {[question.oneans, question.twoans,question.threeans, question.fouranswer].map((answer, index) =>(
                                <li 
                                className='li'
                                key={index} 
                                onClick={() => handleClick(index)}
                                >{answer}</li>
                            ))}
                        </ul>}
                        {!question.typequest && <ul className='ul'>
                            <div>
                                <Form className='d-flex justify-content-center mt-20' onSubmit={handleOpenClick}>
                                    <Form.Control 
                                    className='w-50 me-15'
                                    placeholder='Введите ответ'
                                    onChange={(e) => setQuest(e.target.value)} />
                                    <Button 
                                    className='ms-10'
                                    type="submit" 
                                    onClick={handleOpenClick} 
                                    variant="primary" >Отправить</Button>
                                </Form>
                            </div>
                        </ul>}
                        </div>)
                        : (
                            <div className='d-flex flex-column justify-content-center'>
                                <Image src={result} alt="Logo" height='200' width='200' style={{marginLeft: '36%'}}/>
                                <p className='text-center'>Ваш результат {correct} из {quest.length}</p>   
                                <button 
                                className='button' 
                                onClick={()=> {
                                    setStep(0); 
                                    setCorrect(0);
                                    setLabs(quest.sort(() => Math.random() - 0.5))
                                    }
                                }>Повторить</button>
                            </div>
                            
                        )
                    : <h1 className='carousel'>ЗАГРУЗКА  ТЕСТА....</h1>
                }
            </div> 
        </>
    );
};

export default TestForm;