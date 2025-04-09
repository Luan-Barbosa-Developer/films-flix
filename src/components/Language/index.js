import './language.css';

export default function Language(props) {
    return(
        <div className="language-selector">
        <label htmlFor="language">Idioma:</label>
        <select
            id="language"
            name="language"
            value={props.language}
            onChange={(e) => {props.data(e.target.value);}}
        >
            <option value="pt-BR">Português (Brasil)</option>
            <option value="en">English</option>
        </select>
    </div>
    )
}