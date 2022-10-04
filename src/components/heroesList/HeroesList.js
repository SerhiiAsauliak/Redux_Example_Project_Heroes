import {useHttp} from '../../hooks/http.hook';
import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { CSSTransition, TransitionGroup} from 
'react-transition-group';
import './heroList.scss'    

import {fetchHeroes, filteredHeroesSelector } from './heroesSlice';
import HeroesListItem from "../heroesListItem/HeroesListItem";
import Spinner from '../spinner/Spinner';

const HeroesList = () => {
    const filteredHeroes = useSelector(filteredHeroesSelector);
  
    const heroesLoadingStatus = useSelector(state => state.heroes.heroesLoadingStatus);
    const dispatch = useDispatch();

    useEffect(() => {
        dispatch(fetchHeroes());
    }, []);

    useEffect(() => {
        renderHeroesList(filteredHeroes)
    }, [filteredHeroes])

    if (heroesLoadingStatus === "loading") {
        return <Spinner/>;
    } else if (heroesLoadingStatus === "error") {
        return <h5 className="text-center mt-5">Ошибка загрузки</h5>
    }

    const renderHeroesList = (arr) => {
        if (arr.length === 0) {
            return <h5 className="text-center mt-5">Героев пока нет</h5>
        }

        return arr.map(({id, ...props}) => {
            return (
                <CSSTransition key={id} timeout={300} classNames="hero">
                    <HeroesListItem  id={id} {...props}/>
                </CSSTransition>
            )
        })
    }

    const elements = renderHeroesList(filteredHeroes);
    return (
            <TransitionGroup component="ul">
                {elements}
            </TransitionGroup>
    )
}

export default HeroesList;