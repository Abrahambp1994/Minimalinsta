import './HeaderPageTitle.css';

export const HeaderPageTitle = ({ pageTitle }) => {
    return(
        <div className='header-page-title'>
            <h2>{pageTitle}</h2>
        </div>
    )
}