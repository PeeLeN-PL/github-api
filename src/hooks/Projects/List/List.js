// @snippet
import React, { useState, useEffect } from 'react';
import PropTypes from 'prop-types'
import { useDispatch } from "react-redux";
import { reducerSET } from "../../../actions/default"

const errors = {
    "Git Repository is empty.": "Repozytorium Git jest puste."
}


const List = (props) => {

    // redux ->
    const dispatch = useDispatch();
    // <- redux
    const [username, setUsername] = useState(props.username);
    const [projects, setProjects] = useState(false);
    const [commits, setCommits] = useState({});


    useEffect(() => {
        setUsername(props.username)
        getProjects(props.username);
    }, [props.username]); // eslint-disable-line react-hooks/exhaustive-deps


    const getProjects = async (user) => {
        const response_repos = await fetch(`https://api.github.com/users/${user}/repos`);
        const repos = await response_repos.json();
        dispatch(reducerSET(false, 'ERROR_SET_MESSAGE'))
        if (Array.isArray(repos)) {
            const repos_sort = sortData(repos)
            setProjects(repos_sort.slice(0, 5));
            if (!repos.length) {
                dispatch(reducerSET('Ten użytkownik nie posiada repozytoriów', 'ERROR_SET_MESSAGE'))
            }
        }
    }

    const sortData = (data) => {
        return data.sort((a, b) => new Date(b.updated_at).getTime() - new Date(a.updated_at).getTime());
    }

    const getCommits = async (url, repo_id) => {
        const commits_data_2 = Object.assign({}, commits)
        const response_commits = await fetch(url);
        const commits_data = await response_commits.json();
        dispatch(reducerSET(false, 'ERROR_SET_MESSAGE'))
        if (Array.isArray(commits_data)) {
            commits_data_2[repo_id] = commits_data.splice(0, 5);
        } else {
            commits_data_2[repo_id] = false;
            dispatch(reducerSET(errors[commits_data.message], 'ERROR_SET_MESSAGE'))
        }
        setCommits(commits_data_2);
    }


    return (
        <>
            {projects && projects.length ?
                <div className="projects__list">
                    <h2 className="projects__list__label">Repozytoria użytkownika <span className="projects__list__label__user">{username}</span>:</h2>
                    <ol className="projects__list__items list">
                        {projects.map((item) => {
                            return <li className="projects__list__items__item list__item" key={`projects__${item.created_at}`}>
                                <div className="projects__list__items__item__section--left">
                                    <div className="projects__list__items__item__name">{item.name}</div>
                                    <div className="projects__list__items__item__update-at">{new Date(item.updated_at).toLocaleString()}</div>
                                </div>
                                <div className="projects__list__items__item__section--right">
                                    {commits[item.id] === undefined ? <span onClick={() => getCommits(item.commits_url.replace('{/sha}', ''), item.id)} className="projects__list__items__item__button">pobierz commity</span> : null}
                                </div>
                                {commits[item.id] && commits[item.id].length ? <ul className="projects__list__items__item__commits">
                                    {commits[item.id].map((commit, index) => {
                                        return <li key={`projects__${item.created_at}__commit__${index}`}>{commit.commit.message}</li>
                                    })}
                                </ul> : null}
                            </li>
                        })}
                    </ol>
                </div> : null}
        </>
    )

}
export default List

List.defaultProps = {
    username: false
}

List.propTypes = {
    username: PropTypes.string
}