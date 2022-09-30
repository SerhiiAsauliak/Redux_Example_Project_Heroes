import { v4 as uuidv4 } from 'uuid';
import { Formik, Form, Field, ErrorMessage } from 'formik';
import * as yup from 'yup';
import { useDispatch } from 'react-redux';
import {heroesAdd} from '../../actions';
import {useHttp} from '../../hooks/http.hook';

const HeroesAddForm = () => {
    const dispatch = useDispatch();
    const {request} = useHttp();

    return (
        <Formik initialValues={{ name: '', description: '', element: ''}}  
                validationSchema={yup.object({
                    name: yup.string()
                            .min(2, "Min length 2 symbols")
                            .required("Required field!"),
                    description: yup.string().min(10, "Min 10 symbols")
                            .required("Required field"),
                    element: yup.string().required("Choose the element")
                })} 
                onSubmit={values => {
                    const hero = {
                        id: uuidv4(),
                        name: values.name,
                        description: values.description,
                        element: values.element
                      }
                    console.log(hero);
                    request("http://localhost:3001/heroes", "POST", JSON.stringify(hero));
                    dispatch(heroesAdd(hero));
                    }}>
            <Form className="border p-4 shadow-lg rounded">
                <div className="mb-3">
                    <label htmlFor="name" className="form-label fs-4">Имя нового героя</label>
                    <Field 
                        type="text" 
                        name="name" 
                        className="form-control" 
                        id="name" 
                        placeholder="Как меня зовут?"/>
                    <ErrorMessage name="name" component="div" />
                </div>
    
                <div className="mb-3">
                    <label htmlFor="description" className="form-label fs-4">Описание</label>
                    <Field
                        name="description" 
                        className="form-control" 
                        id="description" 
                        placeholder="Что я умею?"
                        style={{"height": '130px'}}/>
                    <ErrorMessage name="description" component="div" />
                </div>
    
                <div className="mb-3">
                    <label htmlFor="element" className="form-label">Выбрать элемент героя</label>
                    <Field 
                        className="form-select" 
                        id="element" 
                        name="element"
                        as="select">
                        <option >Я владею элементом...</option>
                        <option value="fire">Огонь</option>
                        <option value="water">Вода</option>
                        <option value="wind">Ветер</option>
                        <option value="earth">Земля</option>
                    </Field>
                    <ErrorMessage name="element" component="div" />
                </div>
    
                <button type="submit" className="btn btn-primary">Создать</button>
            </Form>
        </Formik>
    )
}

export default HeroesAddForm;
