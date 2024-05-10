import logo from "../assets/logo.png";
import { useState, useEffect } from 'react';

const Questions = () => {
    const [categories, setCategories] = useState([]);
    const [selectedCategory, setSelectedCategory] = useState(null);
    const [subcategories, setSubcategories] = useState([]);
    const [sCategory, setSCategory] =useState("")
    const [answers, setAnswers] = useState([]);

    useEffect(() => {
        const fetchData = async () => {
            try {
                const response = await fetch('https://customgbt.pythonanywhere.com/api/get/allcatagory/');
                if (response.ok) {
                    const data = await response.json();
                    setCategories(data.payload);
                } else {
                    console.error('Failed to fetch data');
                }
            } catch (error) {
                console.error('Error fetching data:', error);
            }
        };

        fetchData();
    }, []);
    
    const handleCategorySelect = async (categoryId) => {
        setSelectedCategory(categoryId);
        try {
            console.log(categoryId)
            const response = await fetch(`https://customgbt.pythonanywhere.com/api/fetch/subcategory/?id=${categoryId}`);
            if (response.ok) {
                const data = await response.json();
                console.log(data);
                setSubcategories(data.payload);
            } else {
                console.error('Failed to fetch subcategories');
            }
        } catch (error) {
            console.error('Error fetching subcategories:', error);
        }
    };
    

    const handleAnswer = (answer) => {
        setAnswers(prevAnswers => [...prevAnswers, answer]);
    };

    const handleBack = () => {
        setSelectedCategory(null);
        setAnswers([]);
    };

    return (
        <div className="w-[100vw] h-[100vh] bg-white flex flex-col items-center justify-center">
            <div className="w-[100%] h-[12%] bg-[#F3E8F3] flex items-center justify-center pr-10">
                <img src={logo} alt="" className="w-20 h-20 object-contain" />
                <h1 className="text-[#bf5670] font-bold text-xl">CustomGBT</h1>
            </div>
            <div className="w-[90%] h-[88%] p-10 flex flex-wrap gap-4 cursor-pointer">
                {!selectedCategory &&
                    categories.map(category => (
                        <CategoryCard
                            key={category.id}
                            category={category}
                            handleCategorySelect={handleCategorySelect}
                        />
                    ))
                }
                {selectedCategory &&
                    <Subcategories
                        subcategories={subcategories}
                        category={sCategory}
                        handleAnswer={handleAnswer}
                        handleBack={handleBack}
                    />
                }
            </div>
        </div>
    );
};

const CategoryCard = ({ category, handleCategorySelect }) => {
    const handleClick = () => {
        handleCategorySelect(category.id);
    };

    return (
        <div
            className="w-36 h-28 boreder-[2px] border-[#BF5670] rounded-xl flex flex-col items-center flex-wrap justify-center bo text-sm font-bold rounded-sm hover:text-[15px] hover:text-[#31295e]"
            onClick={handleClick}
        >
            <svg
                xmlns="http://www.w3.org/2000/svg"
                dangerouslySetInnerHTML={{ __html: category.svg.replace(/\\/g, "") }}
                className="w-[32px] h-[32px] hover:w-[34px] hover:h-[34px] overflow-hidden"
            ></svg>
            <p>{category.name}</p>
        </div>
    );
};



const Subcategories = ({ subcategories, category, selectedSubcategory, handleAnswer, handleBack }) => {
    const [answer, setAnswer] = useState('');
    const [subcategory, setSubcategory] = useState('');
    const [showTextarea, setShowTextarea] = useState(false);

    const handleChange = (event) => {
        setAnswer(event.target.value);
    };

    const handleSubmit = async () => {
        if (answer.trim() !== '') {
            try {
                const response = await fetch('https://customgbt.pythonanywhere.com/api/bot/quick/', {
                    method: 'POST',
                    headers: {
                        'Content-Type': 'application/json',
                    },
                    body: JSON.stringify({
                        catagory: category,
                        subcategory: subcategory,
                        prompt: answer,
                    }),
                });

                if (response.ok) {
                    console.log('Answer submitted successfully');
                    // Clear answer input after successful submission
                    setAnswer('');
                    // Go back to the category selection view
                    handleBack();
                } else {
                    console.error('Failed to submit answer');
                }
            } catch (error) {
                console.error('Error submitting answer:', error);
            }
        }
    };

    const handleSubcategorySelect = (subcategory) => {
        handleAnswer(subcategory);
        setSubcategory(subcategory)
        setShowTextarea(true); // Show textarea input
    };

    const handleGoBack = () => {
        setShowTextarea(false); // Hide textarea input
        handleBack(); // Go back to the category selection view
    };

    return (
        <div>
            <h2>Subcategories: {selectedSubcategory}</h2>
            {!showTextarea && (
                <div className="grid grid-cols-3 gap-4">
                    {subcategories.map(subcategory => (
                        <div
                            key={subcategory.id}
                            className="w-36 h-28 bg-gray-50 flex items-center justify-center p-4 cursor-pointer"
                            onClick={() => handleSubcategorySelect(subcategory.sub_catagory)}
                        >
                            {subcategory.sub_catagory}
                        </div>
                    ))}
                </div>
            )}
            {showTextarea && (
                <div>
                    <textarea 
                        value={answer}
                        onChange={handleChange}
                        placeholder="Enter your answer..."
                        className="w-full h-24 p-2 border border-gray-300 rounded"
                    />
                    <button onClick={handleSubmit} className="mt-2 px-4 py-2 bg-gray-200 text-gray-800 rounded hover:bg-gray-300">Submit Answer</button>
                    <button onClick={handleGoBack} className="ml-2 px-4 py-2 bg-gray-200 text-gray-800 rounded hover:bg-gray-300">Back</button>
                </div>
            )}
        </div>
    );
};



export default Questions;