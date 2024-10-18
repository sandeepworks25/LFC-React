import React from 'react';
const PartnerSelect = ({ partners, onSelect }) => {
  return (
    <div className="partnerSelect">
      <label className="label" htmlFor="partner">Partner</label>
      <select id="partner" className="form-select" onChange={(e) => onSelect(e.target.value)}>
        <option value="">Select Partner</option>
        <option value="0">No Partner</option>
        {partners.map(partner => (
          <option key={partner.id} value={partner.id}>{partner.name}</option>
        ))}
      </select>
    </div>
  );
};

export default PartnerSelect;