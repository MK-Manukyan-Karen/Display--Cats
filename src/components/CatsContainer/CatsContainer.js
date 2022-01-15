import React from 'react';
import { connect } from 'react-redux'
import { compose } from 'redux'
import { NavLink } from 'react-router-dom'
import { getCatsData, getCatsCategories, setPortionNumber, catsPageChange } from '../../redux/reducer/Cats-reducer'
import SelectCategory from '../SelectCategory/SelectCategory'
import style from './CatsContainer.module.css'
import Cats from './Cats/Cats'
import Loading from '../Loading/Loading'
import Pagination from '../Pagination/Pagination';




class CatsReduxContainer extends React.PureComponent {


    onPageChanged = (page) => {
        this.props.catsPageChange(this.props.categoryId, page);
    }

    componentDidMount() {
        this.props.getCatsCategories()
    }

    render() {
        console.log(this.props.categoryId)

        if (this.props.isLoading) {
            return <Loading />
        }

        return (
            <>
                <NavLink to='/' className={style.navLink}>Back to start</NavLink>
                <SelectCategory categories={this.props.categories}
                    getCatsData={this.props.getCatsData}
                />

                <div className={style.catsBoxWrapper}>
                    {
                        this.props.cats.map(cat => <Cats cat={cat} key={cat.id} setPage={this.setPage} />)
                    }
                </div>
                <Pagination catsTotalCount={this.props.cats.length}//not available total count cats
                    pageSize={this.props.pageSize}
                    currentPage={this.props.currentPage}
                    onPageChanged={this.onPageChanged}
                    portionNumber={this.props.portionNumber}
                    setPortionNumber={this.props.setPortionNumber}
                />

            </>

        )

    }
}

const mapStateToProps = (state) => {
    return {
        cats: state.cats.cats,
        categories: state.cats.categories,
        isLoading: state.cats.isLoading,
        currentPage: state.cats.currentPage,
        categoryId: state.cats.categoryId,
        portionNumber: state.cats.portionNumber,
    }
};

const CatsContainer = compose(
    connect(mapStateToProps, { getCatsData, getCatsCategories, setPortionNumber, catsPageChange }))(CatsReduxContainer)


export default CatsContainer;






