import { Cayman, Macan, Porsche, sayModel } from "./lib/types";

sayModel(new Porsche("Targa 4S", 2016));

sayModel(new Macan(2016));

sayModel(new Cayman(2018, { launchControl: true, sport: false, sportPlus: true }));
