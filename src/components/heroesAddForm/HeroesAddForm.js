import { v4 as uuidv4 } from 'uuid';
import { Formik, Form, Field, ErrorMessage } from 'formik';
import * as yup from 'yup';
import { useDispatch, useSelector } from 'react-redux';
import {heroesAdd} from '../../components/heroesList/heroesSlice';
import {useHttp} from '../../hooks/http.hook';

const HeroesAddForm = () => {
    const dispatch = useDispatch();
    const {request} = useHttp();
    const {filters} = useSelector(state => state.filters);

    const renderFilters = (filters) => {
        if(filters && filters.length > 0){
            return filters.map(({name, label}) => {
                if(name === 'all'){
                    return
                }
                return <option key={name} value={name}>{label}</option>
            })
        }
    }

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
                        {renderFilters(filters)}
                    </Field>
                    <ErrorMessage name="element" component="div" />
                </div>
    
                <button type="submit" className="btn btn-primary">Создать</button>
            </Form>
        </Formik>
    )
}

export default HeroesAddForm;
