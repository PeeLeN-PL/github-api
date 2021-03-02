// @snippet
import React from 'react';

const Requirements = () => {
    return (
        <div id="Requirements">
            <h1>Założenia aplikacji</h1>
            <p>Aplikacja ma się składać z minimum 3 ekranów:</p>
            <ol>
                <li> Wyszukiwarka projektów githubowych</li>
                <li>Założenia całej aplikacji</li>
                <li>Wyliczanie silni</li>
            </ol>
            <p>Ad 1</p>
            <ul>
                <li>Wykorzystane jest publiczne API Githuba;</li>
                <li>Czeka na podanie loginu użytkownika:
                            <ul>
                        <li>waliduje poprawność;</li>
                        <li>obsługuje nieistniejące loginy;</li>
                    </ul>
                </li>
                <li>wyświetla maksymalnie 5 projektów w kolejności od ostatnio updatowanego:
                            <ul>
                        <li>wyświetla maksymalnie 5 commitów każdego z projektów; </li>
                    </ul>
                </li>
            </ul>
            <p>Ad 2</p>
            <ul>
                <li>wyświetla niniejszą treść (listę wymagań) z podobnym (takim samym) podziałem i układem; </li>
                <li>proszę zawrzeć też autora aplikacji - własne imię i nazwisko; </li>
            </ul>
            <p>Ad 3</p>
            <ul>
                <li>input do podania liczby dla której będzie wyliczona silnia;</li>
                <li>historia poprzednich wyliczeń. </li>
            </ul>
            <p>Ogólne</p>
            <ul>
                <li>korzysta z <b>LESS / SASS</b>. Spełnia wymogi <b>BEM</b>. Jest też <b>estetyczna;</b></li>
                <li>wyświetla <b>co drugi</b> element każdej listy wyróżnionym kolorem;</li>
                <li>jest <b>hostowana </b>(github pages, heroku, itd..), a jej kod jest dostępny <b>publicznie</b>; </li>
                <li>Miło widziane użycie <b>middlewarów reduxowych</b>.</li>
            </ul>
            <p>Autor: Paweł Mieczkowski</p>
        </div>
    )

}
export default Requirements
