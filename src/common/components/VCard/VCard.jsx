import React, { useEffect } from "react";

import VCardCreator from "vcard-creator";

const VCard = () => {
  useEffect(() => {
    /*
    BEGIN:VCARD
    VERSION:3.0
    PRODID:-//Apple Inc.//iPhone OS 16.6.1//EN
    N:Macheo Lorca;Francisco E.;;;
    FN:Francisco E. Macheo Lorca
    ORG:ASUN;
    EMAIL;type=INTERNET;type=WORK;type=pref:fmacheo@asunarg.com
    EMAIL;type=INTERNET;type=WORK:fmacheo@asun.cl
    TEL;type=CELL;type=VOICE;type=pref:+54 9 3764 57 6176
    X-SOCIALPROFILE;type=Instagram;x-user=aserraderos_unidos_asun:x-apple:aserraderos_unidos_asun
    X-SOCIALPROFILE;type=facebook:http://www.facebook.com/Facebook@AsunChile
    item1.URL;type=pref:www.asun.cl
    item1.X-ABLabel:_$!<HomePage>!$_
    END:VCARD
     */

    const vcard = new VCardCreator();
    const firstname = "Francisco E.";
    const lastname = "Macheo Lorca";
    const organization = "ASUN";
    const workEmail1 = "fmacheo@asunarg.com";
    const workEmail2 = "fmacheo@asun.cl";
    const workPhone = "+54 9 3764 57 6176";
    const instagram = "aserraderos_unidos_asun";
    const facebook = "http://www.facebook.com/Facebook@AsunChile";
    const website = "www.asun.cl";

    vcard
      .addName(lastname, firstname)
      .addCompany(organization)
      .addEmail(workEmail1, "work", true)
      .addEmail(workEmail2, "work")
      .addPhoneNumber(workPhone, "work", "cell")
      .addSocial(instagram, "Instagram", "aserraderos_unidos_asun")
      .addSocial(
        facebook,
        "Facebook",
        "http://www.facebook.com/Facebook@AsunChile"
      )
      .addURL(website, "Website");

    const vcardString = vcard.toString();

    const element = document.createElement("a");
    const file = new Blob([vcardString], { type: "text/plain;charset=utf-8" });
    element.href = URL.createObjectURL(file);
    element.download = "myFile.vcf";
    document.body.appendChild(element);
    element.click();
  }, []);

  return (
    <div>
      <h1>VCard</h1>
    </div>
  );
};

export default VCard;
