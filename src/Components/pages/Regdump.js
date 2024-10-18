import React, { useState, useEffect } from 'react';
import axios from 'axios';
import PartnerSelect from '../components/Regdump/PartnerSelect';
import EventSelect from '../components/Regdump/EventSelect';
import RegDumpFunc from '../components/Regdump/RegDumpFunc';
import Menu from '../components/Menu';
import Header from "../components/Header";
import base_api_url from './../components/config';



const Regdump = () => {
  const [partners, setPartners] = useState([]);
  const [events, setEvents] = useState([]);
  const [selectedPartner, setSelectedPartner] = useState('');
  const [selectedEvent, setSelectedEvent] = useState('');
  const [regDumpData, setRegDumpData] = useState(null);

  useEffect(() => {
    const fetchPartners = async () => {
      try {
        const response = await axios.get('${base_api_url}/getPartnerList');
        setPartners(response.data.response.data);
      } catch (error) {
        console.error('Error fetching partners', error);
      }
    };

    fetchPartners();
  }, []);

  useEffect(() => {
    if (selectedPartner) {
      const fetchEvents = async () => {
        try {
          const response = await axios.post(`${base_api_url}/getPartnerEventList?partner_id=${encodeURIComponent(selectedPartner)}`);
          setEvents(response.data.response.data);
        } catch (error) {
          console.error('Error fetching events', error);
        }
      };

      fetchEvents();
    } else {
      setEvents([]);
    }
  }, [selectedPartner]);

  useEffect(() => {
    if (selectedEvent) {
      const fetchRegDump = async () => {
        try {
          const response = await axios.post(`${base_api_url}/regdump?event_id=${encodeURIComponent(selectedEvent)}`);
          const responseData = response.data.response.data;
          setRegDumpData(responseData);
        } catch (error) {
          console.error('Error fetching registration dump data', error);
          setRegDumpData(null);
        }
      };

      fetchRegDump();
    } else {
      setRegDumpData(null);
    }
  }, [selectedEvent]);

  return (
    <div className="regdump-page">
      <div className="menu">
        <Menu />
      </div>
      <div className="regdump-data right-div">
        <h1 className="heading">RegDump</h1>
        <Header />
        <div className="RegDumpPartnerSelect"><PartnerSelect partners={partners} onSelect={setSelectedPartner} /></div>
        <div className="RegDumpEventSelect"><EventSelect events={events} onSelect={setSelectedEvent} /></div>
        <RegDumpFunc data={regDumpData} />
      </div>
    </div>
  );
};

export default Regdump;
