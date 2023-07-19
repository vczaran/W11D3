class Api::BenchesController < ApplicationController

    def index
        @benches = Bench.all
        render json: { benches: @benches }
    end

    def create
        @bench = Bench.new(bench_params)

        if @bench.save
            render json: { bench: @bench }
        else
            render json: {errors: @bench.errors.full_messages }, status: 422
        end
    end

    def show
        @bench = Bench.find(params[:id])
        render json: {bench: @bench}
    end


    private

    def bench_params
        params.require(:bench).permit(:title, :description, :price, :seating, :lat, :lng)
    end

end