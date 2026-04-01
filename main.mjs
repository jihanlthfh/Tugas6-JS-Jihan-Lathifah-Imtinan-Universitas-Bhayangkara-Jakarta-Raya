import { index, store, destroy } from "./controller.mjs";

const main = () => {
    index();      // tampil awal
    store();      // tambah 2 data
    index();      // tampil lagi
    destroy();    // hapus 1 data
    index();      // tampil akhir
};

main();