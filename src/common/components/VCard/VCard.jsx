import React, { useEffect } from "react";

const VCard = () => {
  const vcard = `BEGIN:VCARD
    VERSION:3.0
    PRODID:-//Apple Inc.//iPhone OS 16.6.1//EN
    N:Macheo Lorca;Francisco E.;;;
    FN:Francisco E. Macheo Lorca
    ORG:ASUN;
    EMAIL;type=INTERNET;type=WORK;type=pref:fmacheo@asun.cl
    EMAIL;type=INTERNET;type=WORK:fmacheo@asunarg.com
    TEL;type=CELL;type=VOICE;type=pref:+54 9 3764 57 6176
    X-SOCIALPROFILE;type=facebook:http://www.facebook.com/Facebook@AsunChile
    X-SOCIALPROFILE;type=Instagram;x-user=aserraderos_unidos_asun:x-apple:aserraderos_unidos_asun
    item1.URL;type=pref:www.asun.cl
    item1.X-ABLabel:$!<HomePage>!$
    URL;type=Created with:https://vcard.nfc.cool
    END:VCARD`;

  useEffect(() => {
    console.log(vcard);
    const file = new Blob([vcard], { type: "text/plain" });
    const a = document.createElement("a");
    const url = URL.createObjectURL(file);
    a.href = url;
    a.download = "vcard.vcf";
    a.click();
    URL.revokeObjectURL(url);
  }, []);

  return (
    <div>
      <h1>descargando</h1>
    </div>
  );
};

export default VCard;
