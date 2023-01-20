import { React, useEffect } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import DetailNav from '../../components/DetailNav';
import SectionSet from '../../components/SectionSet';
import ScrollButton from '../../components/ScrollButton';
import DetailPresentation from '../../components/DetailPresentation';

const Details = (props) => {
    const { id } = useParams();
    const navigate = useNavigate();
    const regex = /^0[0-6]{1}$/.test(id);

    useEffect(() => {
        if (!regex) {
            navigate("/error");
        }
    }, []);

    if (regex) {
        var page = props.config.projects[id];
        return (
            <>
                <DetailPresentation page={page}/>
                <DetailNav sections={page.sections}/>
                <SectionSet sections={page.sections}/>
                <ScrollButton />
            </>
        );
    }
};

export default Details;